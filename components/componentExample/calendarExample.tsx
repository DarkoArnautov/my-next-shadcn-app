"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
export const CalendarExample = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
    </div>
  );
};
