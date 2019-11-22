class TrinketsController < ApplicationController
  def index
    render status: 200, json: Trinket.all
  end
end