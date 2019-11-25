Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '/api' do
    get "azerite/search", to: 'azerites#search'
    post "azerite/update", to: 'azerites#update'

    get "/trinkets/search", to: 'trinkets#search'
    post "trinkets/update", to: 'trinkets#update'

    get "/weapons/search", to: 'weapons#search'
    post "weapons/update", to: 'weapons#update'
  end
end
