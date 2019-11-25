class TrinketsController < ApplicationController
  def search
    render status: 200, json: Trinket.all
  end

  def update
    record = Trinket.find_by(id: params[:id])
    views = record.views
    record.update(views: views + 1)
    render status: 200, json: record
  end
end