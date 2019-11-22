class AddTrinketTypeToTrinkets < ActiveRecord::Migration[6.0]
  def change
    add_column Trinket, :trinket_type, :string
  end
end
