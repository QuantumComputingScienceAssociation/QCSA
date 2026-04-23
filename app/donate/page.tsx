export default function DonatePage() {
  return (
    <div className="flex flex-col items-center py-20 px-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-16">
            <h1 className="text-2xl font-semibold text-gray-900 mb-3">Donate Today!</h1>
            <p className="text-sm text-gray-500">Description</p>
          </div>
          
          <form className="space-y-8">
            <div>
              <span className="block text-sm font-bold text-[#2a4365] mb-4">
                Name <span className="font-normal text-[#5c7294]">(required)</span>
              </span>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-[#2a4365] mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full h-10 px-3 border border-[#b8cdef] bg-[#f8fbff] rounded-sm focus:outline-none focus:border-[#2a4365]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-[#2a4365] mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full h-10 px-3 border border-[#b8cdef] bg-[#f8fbff] rounded-sm focus:outline-none focus:border-[#2a4365]"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[#2a4365] mb-2">
                Email <span className="font-normal text-[#5c7294]">(required)</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full h-10 px-3 border border-[#b8cdef] bg-[#f8fbff] rounded-sm focus:outline-none focus:border-[#2a4365]"
                required
              />
            </div>

            <div>
              <label htmlFor="education" className="block text-sm font-bold text-[#2a4365] mb-2">
                Educational Background <span className="font-normal text-[#5c7294]">(required)</span>
              </label>
              <input
                type="text"
                id="education"
                className="w-full h-10 px-3 border border-[#b8cdef] bg-[#f8fbff] rounded-sm focus:outline-none focus:border-[#2a4365]"
                required
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-bold text-[#2a4365] mb-2">
                Rate your experience in superconducting quick design <span className="font-normal text-[#5c7294]">(required)</span>
              </label>
              <input
                type="text"
                id="experience"
                className="w-full h-10 px-3 border border-[#b8cdef] bg-[#f8fbff] rounded-sm focus:outline-none focus:border-[#2a4365]"
                required
              />
            </div>

            <div>
              <span className="block text-sm font-bold text-[#2a4365] mb-2">Institution Name</span>
              <label htmlFor="institution" className="block text-sm text-[#2a4365] mb-2">The most recent institution you attended</label>
              <input
                type="text"
                id="institution"
                className="w-full h-10 px-3 border border-[#b8cdef] bg-[#f8fbff] rounded-sm focus:outline-none focus:border-[#2a4365]"
              />
            </div>

            <div className="flex justify-center mt-12">
              <button type="submit" className="bg-[#24427b] text-white py-2 px-10 rounded-sm font-semibold hover:bg-[#1c3566] transition-colors">
                Donate
              </button>
            </div>
          </form>
        </div>
    </div>
  );
}
