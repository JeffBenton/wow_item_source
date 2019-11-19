class CreateTrinkets < ActiveRecord::Migration[6.0]
  def change
    create_table :trinkets do |t|
      t.string :name
      t.string :source
      t.string :boss
      t.string :role

      t.timestamps
    end
  end
end
