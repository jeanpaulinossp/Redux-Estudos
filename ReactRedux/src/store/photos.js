import createAsyncSlice from "../helper/createAsyncSlice";

const slice = createAsyncSlice({
  name: "photos",
  fetchConfig: () => ({
    url: "https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=10&_user=0",
    options: {
      method: "GET",
      cache: "no-store",
    },
  }),
});

// biblioteca reselect (para controlar os estados dos seletores) não foi utilizada
export const getOverFiveKG = (state) =>
  state.photos.data?.filter(({ peso }) => peso >= 5);
export const fetchPhotos = slice.asyncAction;
export default slice.reducer;
