"use client";
import Image from "next/image";
import { FilterOptions, SortOptions, Tip } from "@/lib/types";
import { useEffect, useState } from "react";
import { fetchTipsData, sendUpdateToBackend } from "@/lib/dataService";
import DataTable from "@/components/DataTable";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ErrorMessage } from "@/components/ErrorMessage";
import { FilterControls } from "@/components/FilterControls";
import { ScatterPlot } from "@/components/ScatterPlot";
import { BarChart } from "@/components/BarChart";

export default function Home() {
  const [originalData, setOrginalData] = useState<Tip[]>([]);
  const [filterData, setFilterData] = useState<Tip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    sex: ["Male", "Female"],
    smoker: ["Yes", "No"],
    day: ["Thur", "Fri", "Sat", "Sun"],
    time: ["Lunch", "Dinner"],
    minTotal: 0,
    maxTotal: 50,
    minTip: 0,
    maxTip: 10,
    minSize: 1,
    maxSize: 6,
  });
  const [sortOptions, setSortOptions] = useState<SortOptions>({
    column: "total_bill",
    direction: "asc",
  });
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTipsData();
        setOrginalData(data);
        setFilterData(data);
        setLoading(false);
      } catch (error) {
        console.log("failed to load data", error);
        throw error;
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (originalData.length === 0) return;
    let filtered = [...originalData];
    filtered = filtered.filter(
      (item) =>
        filterOptions.sex.includes(item.sex) &&
        filterOptions.smoker.includes(item.smoker) &&
        filterOptions.day.includes(item.day) &&
        filterOptions.time.includes(item.time)
    );
    filtered = filtered.filter(
      (item) =>
        item.total_bill >= filterOptions.minTotal &&
        item.total_bill <= filterOptions.maxTotal &&
        item.tip >= filterOptions.minTip &&
        item.tip <= filterOptions.maxTip &&
        item.size >= filterOptions.minSize &&
        item.size <= filterOptions.maxSize
    );
    filtered.sort((a, b) => {
      const aValue = a[sortOptions.column];
      const bValue = b[sortOptions.column];

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOptions.direction === "asc"
          ? aValue - bValue
          : bValue - aValue;
      }
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOptions.direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      return 0;
    });
    setFilterData(filtered);
  }, [originalData, filterOptions, sortOptions]);

  const handleFilterChange = (newFilter: Partial<FilterOptions>) => {
    setFilterOptions((prev) => ({ ...prev, ...newFilter }));
  };

  const handleSortChange = (column: keyof Tip) => {
    setSortOptions((prev) => ({
      column,
      direction:
        prev.column === column
          ? prev.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    }));
  };
  const handleSubmit = async () => {
    try {
      const currentFilters = {
        activeFilters: filterOptions,
        sortColumn: sortOptions.column,
        sortDirection: sortOptions.direction,
        filteredCount: filterData.length,
      };

      await sendUpdateToBackend({
        message: JSON.stringify(currentFilters),
      });

      setSubmitStatus("Data successfully sent to backend!");
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (err) {
      setSubmitStatus("Failed to send data to backend.");
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <div className='min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>
          Data Visualization
        </h1>
        <FilterControls
          filterOptions={filterOptions}
          onFilterChange={handleFilterChange}
        />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
          <ScatterPlot data={filterData} />
          <BarChart data={filterData} />
        </div>
        <div className='mb-8'>
          <DataTable
            data={filterData}
            sortOptions={sortOptions}
            onSortChange={handleSortChange}
          />
        </div>
        <div className='flex justify-center'>
          <button
            onClick={handleSubmit}
            className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md shadow transition duration-150 ease-in-out'
          >
            Submit Filtered Data
          </button>
        </div>
        {submitStatus && (
          <div className='mt-4 text-center'>
            <p
              className={`${
                submitStatus.includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {submitStatus}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
