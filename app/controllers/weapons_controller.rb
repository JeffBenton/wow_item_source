class WeaponsController < ApplicationController
  def search
    render status: 200, json: Weapon.all
  end

  def update
    record = Weapon.find_by(id: params[:id])
    views = record.views
    record.update(views: views + 1)
    render status: 200, json: record
  end
end