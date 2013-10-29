class OrganizersController < Devise::RegistrationsController

	def show
		@organizer = Organizer.find(params[:id])
	end

	def build_resource(*args)
		super
		if session[:omniauth]
			@organizer.apply_omniauth(session[:omniauth])
			@organizer.valid?
		end
	end

	def create
		super
		session[:omniauth] =nil unless @organizer.new_record?
	end
end
