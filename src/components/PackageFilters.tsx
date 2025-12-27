import { useState } from 'react';
import { Package } from '../types/package';
import { MapPin, Clock, RotateCcw } from 'lucide-react';

interface PackageFiltersProps {
  packages: Package[];
  onFilterChange: (destinations: string[], durations: string[]) => void;
}

const DESTINATION_LIST = [
  'Araku',
  'Vanajangi',
  'Madagada',
  'Vizag',
  'Lambasingi',
  'Yarada',
];

export default function PackageFilters({ packages, onFilterChange }: PackageFiltersProps) {
  // Extract all unique durations
  const durations = Array.from(new Set(packages.map((pkg) => pkg.days)));

  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);

  const handleDestinationChange = (destination: string) => {
    let updated;
    if (selectedDestinations.includes(destination)) {
      updated = selectedDestinations.filter((d) => d !== destination);
    } else {
      updated = [...selectedDestinations, destination];
    }
    setSelectedDestinations(updated);
    onFilterChange(updated, selectedDurations);
  };

  const handleDurationChange = (duration: string) => {
    let updated;
    if (selectedDurations.includes(duration)) {
      updated = selectedDurations.filter((d) => d !== duration);
    } else {
      updated = [...selectedDurations, duration];
    }
    setSelectedDurations(updated);
    onFilterChange(selectedDestinations, updated);
  };

  const handleReset = () => {
    setSelectedDestinations([]);
    setSelectedDurations([]);
    onFilterChange([], []);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl mb-8 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
        <h2 className="text-white text-xl font-semibold">Filter Your Perfect Trip</h2>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Destinations */}
          <div className="space-y-2">
            <label className="flex items-center text-base font-medium text-gray-700 gap-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              Choose Destinations
            </label>
            <div className="flex flex-wrap gap-3 mt-2">
              {DESTINATION_LIST.map((destination) => (
                <label
                  key={destination}
                  className={`cursor-pointer inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-300 focus-within:ring-offset-1 ${
                    selectedDestinations.includes(destination)
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedDestinations.includes(destination)}
                    onChange={() => handleDestinationChange(destination)}
                    className="sr-only"
                  />
                  <span>{destination}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Durations */}
          <div className="space-y-2">
            <label className="flex items-center text-base font-medium text-gray-700 gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              Trip Duration
            </label>
            <div className="flex flex-wrap gap-3 mt-2">
              {durations.map((duration) => (
                <label
                  key={duration}
                  className={`cursor-pointer inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-300 focus-within:ring-offset-1 ${
                    selectedDurations.includes(duration)
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedDurations.includes(duration)}
                    onChange={() => handleDurationChange(duration)}
                    className="sr-only"
                  />
                  <span>{duration}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4 items-center flex-wrap">
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
          {/* Best-looking Scroll to see packages indicator */}
          <button
            onClick={() => {
              const el = document.getElementById('packages-grid');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg text-white font-semibold text-base transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 group"
            aria-label="Scroll to packages"
            type="button"
            style={{ boxShadow: '0 4px 24px 0 rgba(59,130,246,0.15)' }}
          >
            <span className="tracking-wide drop-shadow-lg">Scroll to see packages</span>
            <svg className="h-6 w-6 text-white animate-bounce group-hover:text-yellow-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}