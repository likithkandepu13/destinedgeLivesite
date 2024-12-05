import { Package } from '../types/package';

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

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
          <select
            onChange={(e) => onFilterChange(e.target.value, '')}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Vanjangi, Lambasingi, Yarada with Vizag/Araku</option>
            {destinations.map((destination) => (
              <option key={destination} value={destination}>
                {destination}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
          <select
            onChange={(e) => onFilterChange('', e.target.value)}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">All Durations</option>
            {durations.map((duration) => (
              <option key={duration} value={duration}>
                {duration}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
