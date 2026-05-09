export type Timeframe = '7 days' | '30 days' | '6 months' | '1 year'
export type Category = 'Directory' | 'Smart matches' | 'Active Leads'

export interface ChartDataPoint {
  label: string
  value: number
}

export const MOCK_API_RESPONSE: Record<Category, Record<Timeframe, ChartDataPoint[]>> = {
  'Smart matches': {
    '7 days': [
      { label: 'Mon', value: 56 },
      { label: 'Tue', value: 89 },
      { label: 'Wed', value: 44 },
      { label: 'Thur', value: 67 },
      { label: 'Fri', value: 59 },
      { label: 'Sat', value: 87 },
      { label: 'Sun', value: 100 },
    ],
    '30 days': [
      { label: 'W1', value: 45 },
      { label: 'W2', value: 78 },
      { label: 'W3', value: 62 },
      { label: 'W4', value: 91 },
    ],
    '6 months': [
      { label: 'Jan', value: 40 },
      { label: 'Feb', value: 55 },
      { label: 'Mar', value: 48 },
      { label: 'Apr', value: 70 },
      { label: 'May', value: 62 },
      { label: 'Jun', value: 85 },
    ],
    '1 year': [
      { label: 'Q1', value: 50 },
      { label: 'Q2', value: 70 },
      { label: 'Q3', value: 65 },
      { label: 'Q4', value: 95 },
    ],
  },
  'Directory': {
    '7 days': [
      { label: 'Mon', value: 40 },
      { label: 'Tue', value: 65 },
      { label: 'Wed', value: 35 },
      { label: 'Thur', value: 85 },
      { label: 'Fri', value: 50 },
      { label: 'Sat', value: 75 },
      { label: 'Sun', value: 95 },
    ],
    '30 days': [
      { label: 'W1', value: 30 },
      { label: 'W2', value: 55 },
      { label: 'W3', value: 45 },
      { label: 'W4', value: 80 },
    ],
    '6 months': [
      { label: 'Jan', value: 30 },
      { label: 'Feb', value: 45 },
      { label: 'Mar', value: 38 },
      { label: 'Apr', value: 60 },
      { label: 'May', value: 52 },
      { label: 'Jun', value: 75 },
    ],
    '1 year': [
      { label: 'Q1', value: 40 },
      { label: 'Q2', value: 60 },
      { label: 'Q3', value: 55 },
      { label: 'Q4', value: 85 },
    ],
  },
  'Active Leads': {
    '7 days': [
      { label: 'Mon', value: 75 },
      { label: 'Tue', value: 45 },
      { label: 'Wed', value: 90 },
      { label: 'Thur', value: 60 },
      { label: 'Fri', value: 80 },
      { label: 'Sat', value: 40 },
      { label: 'Sun', value: 70 },
    ],
    '30 days': [
      { label: 'W1', value: 65 },
      { label: 'W2', value: 40 },
      { label: 'W3', value: 85 },
      { label: 'W4', value: 55 },
    ],
    '6 months': [
      { label: 'Jan', value: 60 },
      { label: 'Feb', value: 40 },
      { label: 'Mar', value: 75 },
      { label: 'Apr', value: 55 },
      { label: 'May', value: 70 },
      { label: 'Jun', value: 45 },
    ],
    '1 year': [
      { label: 'Q1', value: 70 },
      { label: 'Q2', value: 50 },
      { label: 'Q3', value: 80 },
      { label: 'Q4', value: 60 },
    ],
  },
}
