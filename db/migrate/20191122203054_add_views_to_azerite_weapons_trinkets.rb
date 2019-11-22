class AddViewsToAzeriteWeaponsTrinkets < ActiveRecord::Migration[6.0]
  def change
    add_column Azerite, :views, :integer, :default => 0
    add_column Weapon, :views, :integer, :default => 0
    add_column Trinket, :views, :integer, :default => 0
  end
end
