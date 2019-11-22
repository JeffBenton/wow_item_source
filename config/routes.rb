Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '/api' do
    get :azerite, to: 'azerites#index'
    get :search, to: 'azerites#search'
    post "azerite/update", to: 'azerites#update'

    get :trinkets, to: 'trinkets#index'
  end
end
