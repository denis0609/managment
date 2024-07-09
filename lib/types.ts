export default interface Types{
    checkType:{
        "checkInCount": number,
        "checkOutCount": number
    },
    dailyTaskType:{
        "confirmedTasksCount": number,
        "waitingTasksCount": number
    },
    assignmentsCount:{
        "tasksToAssignCount": number,
        "tasksAssignedCount": number
    },
    reservationsCount:{
        "newReservationsCount": number,
    }
}

export interface InvoiceCardProps {
    image: string;
    propertyId: string;
    propertyName: number;
    noOfNights: number,
    totalIncome: number;
    expenseType: string,
    amount: number,
    selectedTab: string
}

export interface IndividualProps {
    propertyId?: string,
    propertyName?: string,
    address?: string,  
}

export interface ReservationProps{
    startDate: string,
    endDate: string,
    guestName: string
}