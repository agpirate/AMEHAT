

let valueConversions =['latest']
let keyConversions = ['category']
let ValueBasedDataConversions = {'latest': ['createdAt','$gte', new Date(Date.now() - 3*86400000)]}
function buildapiFilter(
  filters: Record<string, any>, 
  searchQuery?: string,
) {
  // Initialize the filterObj structure 
  const filterObj: Record<string, any> =  {};
  
  // Process each filter
  for (const [filterName, filterValues] of Object.entries(filters)) {

    //if Values == ['value','value2']
    if (Array.isArray(filterValues)) 
    {
    const [operator, ...values] = filterValues;

    // Handle different operators 
    switch (operator) { 
      case '$eq':
        if (values.length === 1) {
          filterObj[filterName] = { [operator]: values[0] };
        } else {
          filterObj[filterName] = { '$in': values };
        }
        break;
      case '$contain':
        filterObj[filterName] = { '$contains': values[0] };
        break;
      // Add more operators as needed 
      default:
        filterObj[filterName] = { [operator]: values[0] };
    }
  
} else{
    // If the value is not an array, treat it as a single value

    //if filterValue Requires Verbal Translations
    if(Object.keys(ValueBasedDataConversions).includes(filterValues)){
      // filterObj[ValueBasedDataConversions[filterValues][0]] = { [ValueBasedDataConversions[filterValues][1]]: ValueBasedDataConversions[filterValues][2] }; 
    }
    else filterObj[filterName] = { '$eq': filterValues };   
}


  }

  // Add search query to title and description if provided
  if (searchQuery) {
    filterObj['$or'] = [
      { title: { '$containsi': searchQuery } },
      { description: { '$containsi': searchQuery } }
    ];
  }

  return filterObj;
}

export default buildapiFilter