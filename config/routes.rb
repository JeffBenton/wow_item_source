Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '/api' do
    get :search, to: 'azerites#search'
    post "azerite/update", to: 'azerites#update'

    get :trinkets, to: 'trinkets#index'
    post "trinkets/update", to: 'trinkets#update'
  end
end
