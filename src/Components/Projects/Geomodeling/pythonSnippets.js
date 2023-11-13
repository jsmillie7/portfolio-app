
export const coordNt = `coord = namedtuple('coord','lat lon')`
export const linEqNt = `linEQ = namedtuple('linEQ','m b')`
export const getCoords = `def get_coords(self):
    """Build the geofence polygon from the kmz file data"""
    self.fence = []
    mapping_list = list(self.handler.mapping)[0]
    for coordinate in self.handler.mapping[mapping_list]['coordinates'].split():
        x,y = coordinate.split(',')
        self.fence.append(coord(float(x), , float(y)))

    # Prevent the closed loop divide by zero error
    if self.fence[0] == self.fence[-1]:
        del self.fence[-1]
`
export const loadFile = `def get_filename(self):
    """ This function will find the name of the GeoTIFF file that contains the 
    required data using the file naming convention that the USGS defaults to.

    i.e. 'n40_w107_1arc_v3.tif'

    Note: This only works in North-Western hemispheres
    """
    lat = math.floor(self.fence[0].lat)
    lon = abs(math.floor(self.fence[0].lon))
    fname = f'n{lat}_w{long}_1arc_v3.tif'
    if path.exists(fname):
        return fname
    else:
        print(f'File not found. Download {fname} from USGS EarthExplorer!')
        return None
`