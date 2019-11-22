class AddZoneToTrinketsAndWeapons < ActiveRecord::Migration[6.0]
  def change
    add_column Weapon, :zone, :string
    add_column Trinket, :zone, :string
  end
end
