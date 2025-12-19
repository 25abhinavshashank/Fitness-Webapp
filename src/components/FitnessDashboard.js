import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBodyParts, setEquipment, setMuscles } from "../features/fitnessSlice";

export default function FitnessDashboard() {
  const dispatch = useDispatch();

  const {
    bodyParts = [],
    equipment = [],
    muscles = []
  } = useSelector((state) => state.fitness || {});

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [bodyRes, equipRes, muscleRes] = await Promise.all([
          fetch("https://www.exercisedb.dev/api/v1/bodyparts"),
          fetch("https://www.exercisedb.dev/api/v1/equipments"),
          fetch("https://www.exercisedb.dev/api/v1/muscles"),
        ]);

        const bodyData = await bodyRes.json();
        const equipData = await equipRes.json();
        const muscleData = await muscleRes.json();

        dispatch(setBodyParts(bodyData.data || []));
        dispatch(setEquipment(equipData.data || []));
        dispatch(setMuscles(muscleData.data || []));
      } catch (err) {
        console.error("Failed to fetch fitness data:", err);
      }
    };

    fetchAllData();
  }, [dispatch]);

  return (
   <></>
  );
}
