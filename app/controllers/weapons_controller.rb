class WeaponsController < ApplicationController
  def search
    sources = []
    params[:sources].each_pair { |source, val| sources << source.to_s if val == "true" }
    render status: 200, json: Weapon.where(role: params[:role], source: sources)
  end

  def update
    record = Weapon.find_by(id: params[:id])
    views = record.views
    record.update(views: views + 1)
    render status: 200, json: record
  end
end