export interface Report {
    id: number, 
    title: string, 
    type: string, 
    dateStart: string, 
    dateEnd: string, 
    dateGenerated: string,
    format: 
        'excel' | 
        'csv' | 
        'pie-chart' | 
        'plot-bar' | 
        'plot-line' | 
        'plot-scatter'; 
}