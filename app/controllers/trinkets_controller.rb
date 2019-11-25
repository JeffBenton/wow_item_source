class TrinketsController < ApplicationController
  def search
    sources = []
    params[:sources].each_pair { |source, val| sources << source.to_s if val == "true" }
    role = params[:role].downcase.sub ' ', '-'
    render status: 200, json: Trinket.where(role: role, source: sources)
  end

  def update
    record = Trinket.find_by(id: params[:id])
    views = record.views
    record.update(views: views + 1)
    render status: 200, json: record
  end
end