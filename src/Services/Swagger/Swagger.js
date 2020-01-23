import Base from "../../Config/Base"
import BaseService from "../BaseService";

const GET_PING = () => {
  const url = Base.PING;
  return BaseService.get(url)
}

const POST_CONVERT = schema => {
  const url = Base.CONVERT;
  return BaseService.post(url, schema)
}

export default {
  GET_PING,
  POST_CONVERT
}