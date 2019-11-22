class AzeritesController < ApplicationController
  def index
    render status: 200, json: Azerite.all
  end

  def search
    render status: 200, json: Azerite.where(character_class: params[:class], slot: params[:slots], source: params[:sources])
  end

  def update
    puts params[:id]
    record = Azerite.find_by(id: params[:id])
    views = record.views
    record.update(views: views + 1)
    render status: 200, json: record
  end

end