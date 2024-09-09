import logger from "#root/logger.js"

export safeCallback = (callback) ->
  error = null
  result = null

  try
    result = await callback()
  catch err
    error = err
  finally
    if error
      logger.warn "Error:", error
    else
      logger.info "Success:", result

    [error, result]

export safeReturnBool = (callback) ->
  [error] = await safeCallback callback

  not error
