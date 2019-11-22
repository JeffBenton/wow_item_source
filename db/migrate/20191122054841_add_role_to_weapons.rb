class AddRoleToWeapons < ActiveRecord::Migration[6.0]
  def change
    add_column Weapon, :role, :string
  end
end
