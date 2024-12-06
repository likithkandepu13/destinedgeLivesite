import { Package } from '../types/package';
import { MapPin, Clock, RotateCcw } from 'lucide-react';

interface PackageFiltersProps {
  packages: Package[];
  onFilterChange: (destination: string, duration: string) => void;
}

export default function PackageFilters({ packages, onFilterChange }: PackageFiltersProps) {
  // Extract all unique destinations
  const destinations = Array.from(
    new Set(
      packages.map((pkg) => {
        const title = pkg.title.toLowerCase();
        if (title.includes('vizag')) return 'Vizag';
        if (title.includes('araku')) return 'Araku';
        if (title.includes('yarada')) return 'Yarada';
        if (title.includes('madagada')) return 'Madagada';
        if (title.includes('lambasingi')) return 'Lambasingi';
        if (title.includes('vanajangi')) return 'Vanajangi';
        return pkg.title; // Include unlisted titles as "Other"
      })
    )
  );

  // Extract unique durations
  const durations = Array.from(new Set(packages.map((pkg) => pkg.days)));

  const handleReset = () => {
    onFilterChange('', '');
    window.location.reload();
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl mb-8 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
        <h2 className="text-white text-xl font-semibold">Filter Your Perfect Trip</h2>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center text-base font-medium text-gray-700 gap-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              Choose Destination
            </label>
            <div className="relative">
              <select
                onChange={(e) => onFilterChange(e.target.value, '')}
                className="w-full h-12 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg
                         transition-all duration-200 ease-in-out appearance-none
                         hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                         text-gray-800"
              >
                <option value="">Vanajangi / Araku / Vizag / Yarada / Madagada </option>
                {destinations.map((destination) => (
                  <option key={destination} value={destination}>
                    {destination}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-base font-medium text-gray-700 gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              Trip Duration
            </label>
            <div className="relative">
              <select
                onChange={(e) => onFilterChange('', e.target.value)}
                className="w-full h-12 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg
                         transition-all duration-200 ease-in-out appearance-none
                         hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                         text-gray-800"
              >
                <option value="">Any Duration</option>
                {durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration} {duration === 1 ? 'Day' : 'Days'}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg
                     transition-all duration-200 ease-in-out
                     hover:bg-gray-200 focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50
                     active:transform active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}