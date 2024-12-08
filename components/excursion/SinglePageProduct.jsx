"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import ReservationModal from "./ReservationModel";
import SuccessModal from "./SuccessModal";
import Loader from "../Loader";
import { IoStar } from "react-icons/io5";
import toast from "react-hot-toast";
import EventsId from "./EventsId";

const SinglePageProduct = ({ slug }) => {
  const [idstate, setIdState] = useState(0);
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  const [options, setOptions] = useState([]); // State for options
  const [selectedOptions, setSelectedOptions] = useState({});

  const [activeImage, setActiveImage] = useState(null);
  const [error, setError] = useState(null);
  const [simplifiedOptions, setSimplifiedOptions] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // avis
  const [avis, setAvis] = useState([]);
  const [ratingLoading, setRatingLoading] = useState(false);
  const [averageRating, setAverageRating] = useState(0);

  const tripAvis = (tripId) => {
    axios
      .get(`/api/items/avis?filter={"trip_id":{"_eq":${tripId}}}`)
      .then((response) => {
        setAvis(response.data.data);
        console.log("Avis:", response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tripResponse = await axios.get(`/api/trip/${slug}`);
        const tripData = tripResponse.data.data[0];
        setData(tripData);
        setIdState(tripData?.id);

        if (tripData && tripData.id) {
          const imagesResponse = await axios.get(
            `/api/trip/images/${tripData.id}`
          );
          setImages(imagesResponse.data.data);
          setActiveImage(
            tripData.main_img || imagesResponse.data.data[0]?.image_url
          );

          const optionsResponse = await axios.get(
            `/api/trip/options/${tripData.id}`
          );
          setOptions(optionsResponse.data.data);
        }

        setLoading(false);
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  // Fetch reviews when data changes
  useEffect(() => {
    if (data?.id) {
      tripAvis(data.id);
    }
  }, [data]);

  const [formData, setFormData] = useState({
    tripId: idstate,
    discription: "",
    email: "",
    name: "",
    rate: 0,
  });

  // Function to handle option selection
  const handleOptionChange = (optionName, optionType, additionalPrice) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [optionName]: { optionType, additionalPrice },
    }));
  };

  // Group options by `option_name`
  const groupedOptions = options.reduce((acc, option) => {
    acc[option.option_name] = acc[option.option_name] || [];
    acc[option.option_name].push(option);
    return acc;
  }, {});

  const handleModalSubmit = async (data) => {
    const reservationData = {
      tripId: data.tripId,
      name: data.name,
      quantity: JSON.stringify(data.quantity),
      phone: data.phone,
      email: data.email,
      tripDate: data.tripDate,
      remarque: data.remarque,
      options: JSON.stringify(data.simplifiedOptions), // Convert selectedOptions to a stringified JSON
    };

    {
      /*console.log("Reservation data:", reservationData);*/
    }

    try {
      setLoading(true);
      // Send the reservation data to the backend API
      await axios.post("/api/reservation", reservationData);

      // Display the success message by updating the state
      setLoading(false);
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error creating reservation:", error);
      setLoading(false);
      // Optionally display an error message
      alert("Failed to create reservation. Please try again.");
    } finally {
      setLoading(false);
      // Close the modal after submission
      setIsModalOpen(false);
    }
  };

  const handleNextClick = () => {
    {
      /*console.log("Date:", selectedDate);*/
    }
    {
      /*console.log(
      "Quantity:",
      `single ${quantity.single}, double ${quantity.double}`
    );*/
    }

    // Simplified options for console log
    const options = Object.fromEntries(
      Object.entries(selectedOptions).map(([key, value]) => [
        key.toLowerCase(),
        value.optionType,
      ])
    );
    setSimplifiedOptions(options); // Save the simplified options to state
    {
      /*console.log("Options:", JSON.stringify(options, null, 2));*/
    }
    {
      /*console.log("Trip ID:sssssssssssssssss", simplifiedOptions);*/
    }

    handleOpenModal();
    setIsSubmitted(true);
  };

  // Get the current date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Modal state and handlers
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Calculate the average rating whenever the avis change
  useEffect(() => {
    if (avis.length > 0) {
      const totalRating = avis.reduce((acc, review) => acc + review.rate, 0);
      setAverageRating(totalRating / avis.length);
    }
  }, [avis]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmitAvis = async (e) => {
    e.preventDefault();
    setRatingLoading(true);
    try {
      const response = await fetch("/api/avis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          tripId: idstate, // Dynamically use idstate
        }),
      });

      if (response.ok) {
        toast.success("Review sent successfully!");
        tripAvis(idstate); // Refresh reviews
        setFormData({
          tripId: idstate,
          discription: "",
          email: "",
          name: "",
          rate: 0,
        });
      } else {
        toast.error("Failed to send review. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the review:", error);
    } finally {
      setRatingLoading(false);
    }
  };

  const handleStarClick = (rate) => {
    setFormData((prevData) => ({
      ...prevData,
      rate,
    }));
  };

  if (error) return <p>Error loading data...</p>;

  if (loading) {
    return <Loader />;
  }
  {
    /*console.log("simplifiedOptionssss:", simplifiedOptions);*/
  }

  return (
    <>
      {/* Reservation modal - step 2 */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleModalSubmit}
        reservationData={{
          quantity: quantity,
          simplifiedOptions: simplifiedOptions,
          tripId: idstate,
          tripDate: selectedDate,
        }}
      />

      {/* Sccessful modal */}
      <SuccessModal
        show={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />

      <div className="max-w-5xl mx-auto p-4 sm:p-6 rounded-lg bg-white ">
        <div className="flex flex-col items-center lg:flex-row gap-6 lg:gap-10">
          {/* Left: Image Gallery */}
          <div className="lg:w-1/2 space-y-4">
            {/* Main Image */}
            <div className="flex justify-center items-center">
              <div className="w-full h-[400px] lg:w-[800px] lg:h-[450px]  overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={`http://75.119.130.218:8055/assets/${activeImage}`}
                  alt={data.name}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-2 overflow-x-auto py-2">
              {images.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setActiveImage(image.image_url)}
                  className={`border-2 rounded-md overflow-hidden transition-transform ${
                    activeImage === image.image_url
                      ? "border-main4 scale-105"
                      : "border-gray-300"
                  }`}
                  style={{ width: "70px", height: "70" }}
                >
                  <Image
                    src={`http://75.119.130.218:8055/assets/${image.image_url}`}
                    alt="Thumbnail"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full rounded-md"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="lg:w-1/2 space-y-3 ">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
              {data.name}
            </h1>
            <p className="text-lg sm:text-xl font-extrabold text-main4">
              ${data.price}
            </p>

            <div
              className="text-main4 text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: data.remarque }}
            />

            {/* Date and Quantity Selection */}
            <div className="space-y-4">
              <div className="bg-stone-200 p-3 sm:p-4 rounded-lg shadow">
                <label className="block text-sm  font-semibold mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min={today}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="border-2 rounded-lg border-gray-300 p-2 w-full text-sm "
                />
              </div>

              {data.quantity_title && (
                <div className="bg-stone-200 p-3 sm:p-4 rounded-lg shadow space-y-2">
                  <h3 className="text-sm  font-semibold">
                    {data.quantity_title}
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full">
                      <input
                        type="number"
                        min="0"
                        value={quantity.single}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="border-2 rounded-lg border-gray-300 p-2 w-full text-sm "
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Options Selection */}
            <div className="space-y-4">
              {Object.keys(groupedOptions).map((optionName) => (
                <div
                  key={optionName}
                  className="bg-stone-200 p-3 sm:p-4 rounded-lg shadow"
                >
                  <label className="block text-sm  font-semibold mb-2">
                    {optionName}
                  </label>
                  <select
                    value={selectedOptions[optionName]?.optionType || ""}
                    onChange={(e) => {
                      const selectedOption = groupedOptions[optionName].find(
                        (option) => option.option_type === e.target.value
                      );
                      handleOptionChange(
                        optionName,
                        selectedOption.option_type,
                        selectedOption.additional_price
                      );
                    }}
                    className="border-2 rounded-lg border-gray-300 p-2 w-full text-sm"
                  >
                    <option value="">Select {optionName}</option>
                    {groupedOptions[optionName].map((option) => (
                      <option key={option.id} value={option.option_type}>
                        {option.option_type} (+${option.additional_price})
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <div className="mt-4 sm:mt-6 text-center">
              <button
                onClick={handleNextClick}
                className="bg-main4 text-white px-6 py-2 sm:px-8 w-full  rounded-lg font-medium hover:bg-main3 transition duration-200 text-sm sm:text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Bottom: Long Description */}
        <section className="mt-8 sm:mt-10 text-gray-800 bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-lg sm:text-2xl font-semibold mb-4">
            Description
          </h2>
          <div
            className="text-gray-600 leading-relaxed text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: data.long_description }}
          />
        </section>

        {/* Reviews Section */}
        <section className="mt-8 sm:mt-10" id="avis">
          <div className="p-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Avis
            </h2>
            {/* Rating Result Display */}
            <div className="mt-4 flex items-center">
              <span className="text-lg font-semibold text-gray-800">
                Note :{" "}
              </span>
              <div className="flex items-center ml-2">
                {[...Array(5)].map((_, index) => (
                  <IoStar
                    key={index}
                    className={`${
                      index < Math.round(averageRating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-800">
                {averageRating.toFixed(1)} étoiles
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            {/* Add New Review Form */}
            <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Ajouter un avis
              </h3>
              <form onSubmit={handleSubmitAvis} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Votre Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Entrez votre nom"
                    required
                    className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-main4"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Votre Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Entrez votre email"
                    required
                    className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-main4"
                  />
                </div>
                <div>
                  <label
                    htmlFor="discription"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Votre Avis
                  </label>
                  <textarea
                    id="discription"
                    name="discription"
                    value={formData.discription}
                    onChange={handleChange}
                    placeholder="Écrivez votre avis ici"
                    required
                    rows="4"
                    className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-main4"
                  />
                </div>
                <div>
                  <label
                    htmlFor="rate"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Votre Note
                  </label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((rate) => (
                      <IoStar
                        key={rate}
                        className={`cursor-pointer ${
                          rate <= formData.rate
                            ? "text-yellow-500"
                            : "text-gray-300"
                        } hover:text-yellow-500`}
                        onClick={() => handleStarClick(rate)}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <button
                    type="submit"
                    className="bg-main4 text-white px-6 py-2 sm:px-8 rounded-lg font-medium hover:bg-main3 transition duration-200"
                  >
                    {ratingLoading ? "Loading.." : "Soumettre"}
                  </button>
                </div>
              </form>
            </div>
            {/* Display Reviews */}
            <div className="flex-1 space-y-4 max-h-[600px] overflow-y-auto">
              {avis
                .sort(
                  (a, b) => new Date(b.date_created) - new Date(a.date_created)
                ) // Sort by most recent
                .map((review) => (
                  <div
                    key={review.id}
                    className="bg-gray-100 p-4 rounded-lg shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg text-gray-800">
                        {review.name}
                      </h3>
                      <p className="text-sm text-white p-1 rounded-md bg-main3 ">
                        {new Date(review.date_created).toLocaleDateString(
                          "fr-FR",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                    <p className="text-gray-800 mt-2">{review.discription}</p>
                    <div className="mt-2 flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <IoStar
                          key={index}
                          className={`${
                            index < review.rate
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section className="mt-8 sm:mt-10" id="otherEvent">
          <EventsId id={idstate} />
        </section>
      </div>
    </>
  );
};

export default SinglePageProduct;
