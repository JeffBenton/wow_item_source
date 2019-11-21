class AddSlotToAzerite < ActiveRecord::Migration[6.0]
  def change
    add_column Azerite, :slot, :string
  end
end
