import { ArrowRight, ArrowUpRight, Mic, Radio, Users, Video } from "lucide-react";
import { MEDIA_YOUTUBE_CHANNEL_URL } from "../data/businesses";

const podcastHighlights = [
  {
    icon: Mic,
    title: "Founder & CXO Conversations",
    detail: "In-depth dialogues with entrepreneurs, civic leaders, and industry pioneers.",
  },
  {
    icon: Video,
    title: "Multi-Cam 4K Studio Production",
    detail: "Broadcast-grade video & crisp studio audio produced for YouTube and digital platforms.",
  },
  {
    icon: Users,
    title: "Industry Panels & Spotlights",
    detail: "Sector roundtables across business, real estate, healthcare, education, and technology.",
  },
];

export default function MediaPodcasts({
  onEnquire,
}: {
  onEnquire: (serviceTitle: string) => void;
}) {
  return (
    <section id="podcasts" className="podcasts-section section-wrap">
      <div className="podcasts-header">
        <div>
          <span className="section-kicker">
            <span className="eyebrow-line" /> Flagship Video Podcast Series · Official YouTube Channel
          </span>
          <h2>
            Conversations worth watching.
            <br />
            <em>Voices shaping India’s future.</em>
          </h2>
        </div>
        <p className="podcasts-intro">
          Tune into <strong>Global India Podcasts</strong> on YouTube—featuring candid leadership interviews, entrepreneur journeys, and expert discussions recorded in our studio.
        </p>
      </div>

      {/* Big 16:9 YouTube Channel Thumbnail Showcase */}
      <a
        href={MEDIA_YOUTUBE_CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="yt-showcase-card"
        aria-label="Watch Global India Media Services Podcasts on YouTube"
      >
        <div className="yt-thumbnail-frame">
          <img
            src="/images/global_india_podcast_with_arjun_bhojraj.jpg.jpeg"
            alt="Global India Podcast with Arjun Bhojraj (Director)"
            className="yt-thumbnail-img"
          />
          <div className="yt-thumbnail-vignette" aria-hidden="true" />

          {/* Top Bar Badges */}
          <div className="yt-top-bar">
            <span className="yt-live-pill">
              <Radio size={14} /> IN CONVERSATION · ARJUN BHOJRAJ
            </span>
            <span className="yt-watch-badge">
              <svg viewBox="0 0 28 20" className="yt-mini-icon" aria-hidden="true">
                <path
                  d="M27.4 3.1a3.5 3.5 0 0 0-2.5-2.5C22.7 0 14 0 14 0S5.3 0 3.1.6A3.5 3.5 0 0 0 .6 3.1C0 5.3 0 10 0 10s0 4.7.6 6.9a3.5 3.5 0 0 0 2.5 2.5C5.3 20 14 20 14 20s8.7 0 10.9-.6a3.5 3.5 0 0 0 2.5-2.5C28 14.7 28 10 28 10s0-4.7-.6-6.9Z"
                  fill="#FF0000"
                />
                <polygon points="11.2,14.3 18.5,10 11.2,5.7" fill="#FFFFFF" />
              </svg>
              Watch on YouTube <ArrowUpRight size={14} />
            </span>
          </div>

          {/* Center Big YouTube Play Button */}
          <div className="yt-play-center" aria-hidden="true">
            <span className="yt-play-pulse" />
            <div className="yt-play-button">
              <svg viewBox="0 0 68 48" className="yt-play-svg">
                <path
                  d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                  fill="#FF0000"
                />
                <path d="M 45,24 27,14 27,34" fill="#fff" />
              </svg>
            </div>
          </div>

          {/* Bottom Editorial Lower-Third Overlay */}
          <div className="yt-bottom-bar">
            <div className="yt-bottom-copy">
              <span className="yt-series-kicker">Global India Podcast · Featured In-Conversation</span>
              <h3>In Conversation with Arjun Bhojraj (Director)</h3>
              <p>Watch the exclusive leadership dialogue on building diversified ventures, entrepreneurship, and economic progress.</p>
            </div>
            <div className="yt-waveform" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </a>

      {/* Podcast Pillars & Direct Channel / Guest Booking Actions */}
      <div className="podcasts-footer-bar">
        <div className="podcasts-pillars">
          {podcastHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="podcast-pillar-item">
                <span className="podcast-pillar-icon">
                  <Icon size={18} />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="podcasts-cta-group">
          <a
            href={MEDIA_YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-yt"
          >
            Visit YouTube Channel <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            className="button button-outline"
            onClick={() => onEnquire("Podcasts & interviews")}
          >
            Feature as a Guest <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

