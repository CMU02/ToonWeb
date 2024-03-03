import { useEffect, useState } from "react";
import { Suspense } from "react";
import { useParams } from "react-router-dom";
import ToonEpisodesInfo from "../components/ToonEpisodesInfo";
import ToonEpisodesList from "../components/ToonEpisodesList";
import { fetchDataApi } from "./Toons";

export default function ToonInfo({param}) {
    param = useParams();
    return (
        <div>
            <ToonEpisodesInfo param={param} />
            <ToonEpisodesList param={param} />
        </div>
    )
}