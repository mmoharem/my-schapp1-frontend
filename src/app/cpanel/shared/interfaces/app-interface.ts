export interface studentData {
  id: number,
  class: string,

  user: {
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    birthDate: string,
    phoneNumber: number,
    mobilePhone: number,
    email: string,
    medicalState: string,
    notes: string,
    created_at: string,
    updated_at: string,

    images: {
      filename: string
    }
  },

  grade: {
    name: string,
    level: string,

    fees: {
      id: number,
      old_schFees : number,
      old_booksFees : number,
      schFees : number,
      booksFees : number,
      totFees: number
    }
  }
}

export interface userStudData {
  id: number,
  firstName: string,
  lastName: string,
  address: string,
  birthDate: string,
  phoneNumber: number,
  mobilePhone: number,
  email: string,
  medicalState: string,
  notes: string,
  created_at: string,
  updated_at: string,

  images: [
    {
      filename: string
    }
  ]

  student: {
    id: number,
    class: string,

    grade: {
      name: string,
      level: string,

      fees: {
        id: number,
        old_schFees : number,
        old_booksFees : number,
        schFees : number,
        booksFees : number,
        totFees: number
      }
    }
  }
}

export interface paymentEl {
  id: number,
  type: string,
  amount: number,
  student_id: number,
  created_at: Date,
  updated_at: Date
}
