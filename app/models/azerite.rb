class Azerite < ApplicationRecord
  serialize :tier_four, Array
  serialize :tier_three, Array
  serialize :tier_two, Array
  serialize :tier_one, Array
end