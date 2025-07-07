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
                <label key={destination} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedDestinations.includes(destination)}
                    onChange={() => handleDestinationChange(destination)}
                    className="accent-blue-600 w-4 h-4 rounded"
                  />
                  <span className="text-gray-800 text-sm">{destination}</span>
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
                <label key={duration} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedDurations.includes(duration)}
                    onChange={() => handleDurationChange(duration)}
                    className="accent-blue-600 w-4 h-4 rounded"
                  />
                  <span className="text-gray-800 text-sm">{duration}</span>
                </label>
              ))}
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