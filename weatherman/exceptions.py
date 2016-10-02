class ApiCallFailed(Exception):
    """Api call failed for some reason."""
    def __str__(self):
        msg = super(ApiCallFailed, self).__str__()
        return 'Api call failed: {0}'.format(msg)
