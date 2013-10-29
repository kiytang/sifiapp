require 'spec_helper'

describe 'when I create an event' do
  let(:birthday_party) {create(:event)} 

  it 'can have an uploaded event image' do
  	organizer = FactoryGirl.create(:organizer)
	login_as(organizer, :scope => :organizer)
	  
	visit new_event_path

	fill_in 'Email', with: 'dave@wood.com'
	fill_in 'First name', with: 'd'
	fill_in 'Last name', with: 'w'

	attach_file "Image", example_image_path
	click_button "Create Event"

	expect(page).to have_css 'img.event_image'
  end
end