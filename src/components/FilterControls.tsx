import { FilterOptions } from "@/lib/types";
import React from "react";
interface FilterControlsProps {
  filterOptions: FilterOptions;
  onFilterChange: (newFilters: Partial<FilterOptions>) => void;
}
export const FilterControls = ({
  filterOptions,
  onFilterChange,
}: FilterControlsProps) => {
  const handleCheckboxChange = (field: keyof FilterOptions, value: string) => {
    const currentValue = filterOptions[field] as string[];
    const newValues = currentValue.includes(value)
      ? currentValue.filter((v) => v != value)
      : [...currentValue, value];
    onFilterChange({ [field]: newValues });
  };
  const handleRangeChange = (field: keyof FilterOptions, value: number) => {
    onFilterChange({ [field]: value });
  };
  return (
    <div className='bg-gray-50 p-4 rounded-lg mb-6'>
      <h2 className='text-lg font-semibold mb-4'>Filters</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div>
          <h3 className='font-medium mb-2'>Sex</h3>
          <div className='space-y-2'>
            {["Male", "Female"].map((sex) => (
              <label key={sex} className='flex items-center space-x-2'>
                <input
                  type='checkbox'
                  checked={filterOptions.sex.includes(sex as "Male" | "Female")}
                  onChange={() => handleCheckboxChange("sex", sex)}
                  className='rounded text-blue-500'
                />
                <span>{sex}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className='font-medium mb-2'>Smoker</h3>
          <div className='space-y-2'>
            {["Yes", "No"].map((smoker) => (
              <label key={smoker} className='flex items-center space-x-2'>
                <input
                  type='checkbox'
                  checked={filterOptions.smoker.includes(
                    smoker as "Yes" | "No"
                  )}
                  onChange={() => handleCheckboxChange("smoker", smoker)}
                  className='rounded text-blue-500'
                />
                <span>{smoker}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className='font-medium mb-2'>Days</h3>
          <div className='space-y-2'>
            {["Thur", "Fri", "Sat", "Sun"].map((day) => (
              <label key={day} className='flex items-center space-x-2'>
                <input
                  type='checkbox'
                  checked={filterOptions.day.includes(day as any)}
                  onChange={() => handleCheckboxChange("day", day)}
                  className='rounded text-blue-500'
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className='font-medium mb-2'>Days</h3>
          <div className='space-y-2'>
            {["Lunch", "Dinner"].map((time) => (
              <label key={time} className='flex items-center space-x-2'>
                <input
                  type='checkbox'
                  checked={filterOptions.time.includes(time as any)}
                  onChange={() => handleCheckboxChange("time", time)}
                  className='rounded text-blue-500'
                />
                <span>{time}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
        {/* Total Bill Range */}
        <div>
          <h3 className='font-medium mb-2'>Total Bill Range</h3>
          <div className='space-y-2'>
            <div>
              <label className='block text-sm text-gray-600'>
                Min: {filterOptions.minTotal}
              </label>
              <input
                type='range'
                min='0'
                max='50'
                value={filterOptions.minTotal}
                onChange={(e) =>
                  handleRangeChange("minTotal", parseFloat(e.target.value))
                }
                className='w-full'
              />
            </div>
            <div>
              <label className='block text-sm text-gray-600'>
                Max: {filterOptions.maxTotal}
              </label>
              <input
                type='range'
                min='0'
                max='50'
                value={filterOptions.maxTotal}
                onChange={(e) =>
                  handleRangeChange("maxTotal", parseFloat(e.target.value))
                }
                className='w-full'
              />
            </div>
          </div>
        </div>

        {/* Tip Range */}
        <div>
          <h3 className='font-medium mb-2'>Tip Range</h3>
          <div className='space-y-2'>
            <div>
              <label className='block text-sm text-gray-600'>
                Min: {filterOptions.minTip}
              </label>
              <input
                type='range'
                min='0'
                max='10'
                step='0.5'
                value={filterOptions.minTip}
                onChange={(e) =>
                  handleRangeChange("minTip", parseFloat(e.target.value))
                }
                className='w-full'
              />
            </div>
            <div>
              <label className='block text-sm text-gray-600'>
                Max: {filterOptions.maxTip}
              </label>
              <input
                type='range'
                min='0'
                max='10'
                step='0.5'
                value={filterOptions.maxTip}
                onChange={(e) =>
                  handleRangeChange("maxTip", parseFloat(e.target.value))
                }
                className='w-full'
              />
            </div>
          </div>
        </div>

        {/* Size Range */}
        <div>
          <h3 className='font-medium mb-2'>Party Size Range</h3>
          <div className='space-y-2'>
            <div>
              <label className='block text-sm text-gray-600'>
                Min: {filterOptions.minSize}
              </label>
              <input
                type='range'
                min='1'
                max='6'
                value={filterOptions.minSize}
                onChange={(e) =>
                  handleRangeChange("minSize", parseInt(e.target.value))
                }
                className='w-full'
              />
            </div>
            <div>
              <label className='block text-sm text-gray-600'>
                Max: {filterOptions.maxSize}
              </label>
              <input
                type='range'
                min='1'
                max='6'
                value={filterOptions.maxSize}
                onChange={(e) =>
                  handleRangeChange("maxSize", parseInt(e.target.value))
                }
                className='w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
