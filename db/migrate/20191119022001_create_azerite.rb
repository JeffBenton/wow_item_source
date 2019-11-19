class CreateAzerite < ActiveRecord::Migration[6.0]
  def change
    create_table :azerites do |t|
      t.string :name
      t.string :source
      t.string :tier_four
      t.string :tier_three
      t.string :tier_two
      t.string :tier_one
      t.string :class
    end
  end
end
