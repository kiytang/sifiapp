require 'spec_helper'

describe 'an event confirmation email' do

  it 'is send when an event is created' do
    expect { create_dinner }.to change { emails.count }.by 1
  end

  context 'dinner has already been created' do

  	before(:all) {
		@dinner = Event.create({name: "Dinner on Friday", description: "We are going to subway", organizer: Organizer.new(:email=>"a@example.com"), deadline: "2013-11-08 13:00"})
  	}

	  it 'should have subject "Event Confirmation"'  do

	  	expect(emails.last.subject).to eq "Event Confirmation"
	  end

	  it 'should include the link of the event page' do
	  	 expect(emails.last.body).to include event_path(@dinner)
	  	    # has_xpath?('//table/tr')
	  	    
	  end  

  end

end