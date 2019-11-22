# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_22_203054) do

  create_table "azerites", force: :cascade do |t|
    t.string "name"
    t.string "source"
    t.string "tier_four"
    t.string "tier_three"
    t.string "tier_two"
    t.string "tier_one"
    t.string "character_class"
    t.string "slot"
    t.integer "views", default: 0
  end

  create_table "trinkets", force: :cascade do |t|
    t.string "name"
    t.string "source"
    t.string "boss"
    t.string "role"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "zone"
    t.string "trinket_type"
    t.integer "views", default: 0
  end

  create_table "weapons", force: :cascade do |t|
    t.string "name"
    t.string "source"
    t.string "boss"
    t.string "weapon_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "zone"
    t.string "role"
    t.integer "views", default: 0
  end

end
