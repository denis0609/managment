import { getFormattedDate } from "@/lib/utils";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const getDate = getFormattedDate();
const headers = {
  "Content-Type": "application/json",
  "propertymanagerid": "Mert-Test"
}

export const getCheckIO =async () =>{
    const response = await fetch(
        `${baseUrl}/checkin-checkout-count?date=${getDate}`,
        {
          method: "GET",
          headers: headers,
        });
    
    return await response.json();
}

export const getDailyTasks =async () =>{
    const response = await fetch(
        `${baseUrl}/daily-tasks-count?date=${getDate}`,
        {
          method: "GET",
          headers: headers,
        });
    
    return await response.json();
}

export const getAssignments =async () =>{
    const response = await fetch(
        `${baseUrl}/assignments-count?date=${getDate}`,
        {
          method: "GET",
          headers: headers,
        });
    
    return await response.json();
}

export const getReservations =async () =>{
    const response = await fetch(
        `${baseUrl}/reservations-count?date=${getDate}`,
        {
          method: "GET",
          headers: headers,
        });
    
    return await response.json();
}

export const getListing =async () =>{
    const response = await fetch(
        `${baseUrl}/listings`,
        {
          method: "GET",
          headers: headers,
        });
    
    return await response.json();
}

export const getTasksFromPropertyId =async (propertyId?:string) =>{
  const response = await fetch(
      `${baseUrl}/listings/${propertyId}/tasks`,
      {
        method: "GET",
        headers: headers,
      });
  
  return await response.json();
}

export const getReservationsFromPropertyId =async (propertyId?:string) =>{
  const response = await fetch(
      `${baseUrl}/listings/${propertyId}/reservation`,
      {
        method: "GET",
        headers: headers,
      });
  
  return await response.json();
}

export const getAllTeam =async () =>{
    const response = await fetch(
        `${baseUrl}/team`,
        {
          method: "GET",
          headers: headers,
        });
    
    return await response.json();
}

export const getAllInvoiceEntry =async () =>{
    const response = await fetch(
        `${baseUrl}/invoices/entries`,
        {
          method: "GET",
          headers: headers,
        });
    
    return await response.json();
}

export const getAllInvoiceOutput =async () =>{
    const response = await fetch(
        `${baseUrl}/invoices/outputs`,
        {
          method: "GET",
          headers: headers,
        });
    
    return await response.json();
}

export const getAllStock =async () =>{
    const response = await fetch(
        `${baseUrl}/stocks`,
        {
          method: "GET",
          headers: headers,
        });
    
    return await response.json();
}

export const getCheckins =async () =>{
    const response = await fetch(
        `${baseUrl}/checkins?date=${getDate}`,
        {
          method: "GET",
          headers: headers,
        });
    
    return await response.json();
}

