class AzeritesController < ApplicationController
  def index
    render status: 200, json: Azerite.all
  end
end