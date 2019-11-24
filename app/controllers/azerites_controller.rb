class AzeritesController < ApplicationController

  def search
    sources = []
    slots = []
    params[:sources].each_pair { |source, val| sources << source.to_s if val == "true" }
    params[:slots].each_pair { |slot, val| slots << slot.to_s if val == "true" }

    render status: 200, json: Azerite.where(character_class: params[:class], slot: slots, source: sources)
  end

  def update
    record = Azerite.find_by(id: params[:id])
    views = record.views
    record.update(views: views + 1)
    render status: 200, json: record
  end

end