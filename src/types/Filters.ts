export type Filter =
    | { value: 'All'; text: 'Все сотрудники' }
    | { value: 'Rise'; text: 'На повышение' }
    | { value: 'Over'; text: 'З/П больше 1000$' }
