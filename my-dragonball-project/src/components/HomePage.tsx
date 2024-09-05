import React from "react";
import { useSearch } from "../hooks/useSearch";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../assets/images/dragonBall.png";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import CharacterCard from "./CharacterCard";
import { CharacterDto } from "../models/characterDto";

const HomePage: React.FC = () => {
  
    const {
        characters = [] as CharacterDto[],
        meta,
        loading,
        error,
        handleSearch,
        handlePageChange,
        showAllCharacters,
        paramName,
    } = useSearch();

    const navigate = useNavigate();

    return (
        <div>
            <Header
                backgroundImg={backgroundImg}
                handleSearch={handleSearch}
                paramName={paramName}
            />

            <main
                className="flex flex-1 pt-[220px]"
                style={{ background: "linear-gradient(to right, #FF7E5F, #FEB47B)" }}
            >
                <Sidebar handleSearch={handleSearch} navigate={navigate} />

                <div className="w-3/4 p-4">
                    <button
                        onClick={showAllCharacters}
                        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Show all
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>{error}</p>
                        ) : (
                            characters.map((character) => (
                                <CharacterCard key={character.id} character={character} />
                            ))
                        )}
                    </div>
                </div>
            </main>

            <Footer
                meta={{ currentPage: meta?.currentPage ?? 1 }}
                links={{ next: meta?.totalPages ?? 0 > (meta?.currentPage ?? 1) ? '/next' : null }}
                handlePageChange={handlePageChange}
            />
        </div>
    );
};

export default HomePage;
