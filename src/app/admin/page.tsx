// pages/edit-profile.js

export default function EditProfile() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold mb-4">Edit profile</h2>
          <p className="text-gray-600 mb-6">
            Provide details about yourself and any other pertinent information.
          </p>
  
          <div className="space-y-4">
            <div className="text-gray-800 font-semibold">Basic Information</div>
  
            {/* Profile Photo */}
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/path/to/profile-photo.jpg" // Replace with actual photo path
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <button className="text-blue-500 text-sm font-semibold">Change</button>
                <button className="text-red-500 text-sm font-semibold ml-2">Remove</button>
              </div>
            </div>
  
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Full name</label>
              <input
                type="text"
                placeholder="Dima Groshev"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
  
            {/* Headline */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Headline</label>
              <input
                type="text"
                placeholder="Designer, 123d.one"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
  
            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                placeholder="Example: Hey everyone! I'm a designer and blogger. I love to hike, ski, and travel."
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">Brief description for your profile. URLs are hyperlinked.</p>
            </div>
  
            {/* Email Visibility Toggle */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailVisibility"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="emailVisibility" className="ml-2 block text-sm text-gray-700">
                Make my email publicly visible
              </label>
            </div>
  
            {/* Save Button */}
            <div>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  