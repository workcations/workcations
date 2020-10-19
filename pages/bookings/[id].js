import { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Spinner from "../../components/spinner/spinner";
import BookingPage from "../../containers/booking-page/booking-page";
import Layout from "../../components/layout/layout";

const getBookingId = async (bookingId) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const url = "https://data.workcations.in/getBookingUser/" + bookingId;

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return await fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => error);
};

const Bookings = () => {
  const router = useRouter();
  const { id } = router.query;

  const [bookingDetails, setBookingDetails] = useState(null);
  const [fetchingBooking, setFetchingBooking] = useState(true);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    getBookingId(id)
      .then((result) => {
        setBookingDetails(JSON.parse(result));
      })
      .then(() => {
        setFetchingBooking(false);
      });
  }, [id]);

  useEffect(() => {
    if (bookingDetails) {
      setCart(bookingDetails.cart);
    }
  }, [bookingDetails]);

  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {fetchingBooking ? (
        <Spinner />
      ) : !bookingDetails ? (
        <div style={{ marginTop: "200px" }}>Booking Not Found</div>
      ) : !cart ? (
        <Spinner />
      ) : (
        <Fragment>
          <BookingPage data={bookingDetails} bookingSlug={id} />
        </Fragment>
      )}
    </Layout>
  );
};

export default Bookings;
