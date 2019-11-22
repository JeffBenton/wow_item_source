class AzeritesController < ApplicationController
  def index
    render status: 200, json: Azerite.all
  end

  def search
    render status: 200, json: Azerite.where("character_class = ?", params["class"])
  end
end