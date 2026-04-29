import React, { useState, useEffect, useMemo } from 'react';
import products from '../data/products';

const ALL_CATEGORIES = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

const TAG_COLORS = {
  Free: { bg: '#E8F5E9', color: '#2E7D32' },
  Premium: { bg: '#FFF8E1', color: '#F57F17' },
  Paid: { bg: '#FCE4EC', color: '#AD1457' },
};

function ProductCard({ product }) {
  const tagStyle = TAG_COLORS[product.tag] || TAG_COLORS['Free'];

  return (
    <article className="product-card" aria-label={product.name}>
      <div className="product-card-img-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
        />
        <span
          className="product-tag"
          style={{ background: tagStyle.bg, color: tagStyle.color }}
        >
          {product.tag}
        </span>
        <span className="product-category-badge">{product.category}</span>
      </div>

      <div className="product-card-body">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-desc">{product.description}</p>

        <div className="product-meta">
          <span className="product-meta-item">
            <i className="bi bi-person-circle" aria-hidden="true" /> {product.author}
          </span>
          <span className="product-meta-item">
            <i className="bi bi-calendar3" aria-hidden="true" /> {product.date}
          </span>
          <span className="product-meta-item">
            <i className="bi bi-clock" aria-hidden="true" /> {product.readTime}
          </span>
        </div>

        <div className="product-card-footer">
          <span className="product-price">
            {product.price === 0 ? (
              <span className="price-free">Free</span>
            ) : (
              <>
                <span className="price-currency">₹</span>
                <span className="price-value">{product.price}</span>
              </>
            )}
          </span>
          <a href="#" className="btn-card-cta" aria-label={`Read ${product.name}`}>
            Read More <i className="bi bi-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

function ProductCardSkeleton() {
  return (
    <div className="product-card product-card--skeleton" aria-hidden="true">
      <div className="skeleton-img" />
      <div className="skeleton-body">
        <div className="skeleton-line skeleton-line--wide" />
        <div className="skeleton-line skeleton-line--medium" />
        <div className="skeleton-line skeleton-line--short" />
        <div className="skeleton-footer">
          <div className="skeleton-pill" />
          <div className="skeleton-pill skeleton-pill--sm" />
        </div>
      </div>
    </div>
  );
}

function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('grid'); // 'grid' | 'list'

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const handleClearSearch = () => {
    setSearchQuery('');
    setActiveCategory('All');
  };

  return (
    <section className="products-section" id="products" aria-label="Latest at eGov">
      <div className="container-wide">
        {/* Section Header */}
        <div className="products-header">
          <div>
            <p className="section-eyebrow">Resources &amp; Insights</p>
            <h2 className="section-title">
              Latest at <span className="accent-text">eGov</span>
            </h2>
          </div>
          <p className="products-subtitle">
            Explore our latest articles, whitepapers, case studies and newsletters from the eGov ecosystem.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="products-controls">
          {/* Search Input */}
          <div className="search-wrap">
            <i className="bi bi-search search-icon" aria-hidden="true" />
            <input
              type="search"
              className="search-input"
              placeholder="Search by name or description…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products"
            />
            {searchQuery && (
              <button
                className="search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <i className="bi bi-x-circle-fill" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* View Toggle */}
          <div className="view-toggle" role="group" aria-label="View mode">
            <button
              className={`view-btn${view === 'grid' ? ' view-btn--active' : ''}`}
              onClick={() => setView('grid')}
              aria-label="Grid view"
              aria-pressed={view === 'grid'}
            >
              <i className="bi bi-grid-3x3-gap-fill" aria-hidden="true" />
            </button>
            <button
              className={`view-btn${view === 'list' ? ' view-btn--active' : ''}`}
              onClick={() => setView('list')}
              aria-label="List view"
              aria-pressed={view === 'list'}
            >
              <i className="bi bi-list-ul" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="category-filter" role="group" aria-label="Filter by category">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-pill${activeCategory === cat ? ' filter-pill--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
            >
              {cat}
              {cat !== 'All' && (
                <span className="filter-pill-count">
                  {products.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Results count */}
        {!loading && (
          <p className="results-count" aria-live="polite" aria-atomic="true">
            {filteredProducts.length === 0
              ? 'No results'
              : `Showing ${filteredProducts.length} of ${products.length} items`}
            {(searchQuery || activeCategory !== 'All') && (
              <button className="clear-filters-btn" onClick={handleClearSearch}>
                Clear filters <i className="bi bi-x" aria-hidden="true" />
              </button>
            )}
          </p>
        )}

        {/* Loading State */}
        {loading ? (
          <div
            className={`products-grid${view === 'list' ? ' products-grid--list' : ''}`}
            aria-label="Loading products"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          /* No Results State */
          <div className="no-results" role="status">
            <div className="no-results-icon" aria-hidden="true">
              <i className="bi bi-search" />
            </div>
            <h3 className="no-results-title">No results found</h3>
            <p className="no-results-body">
              We couldn't find anything matching{' '}
              {searchQuery && (
                <strong>"{searchQuery}"</strong>
              )}
              {searchQuery && activeCategory !== 'All' && ' in '}
              {activeCategory !== 'All' && (
                <strong>{activeCategory}</strong>
              )}.
            </p>
            <button className="btn-primary" onClick={handleClearSearch}>
              <i className="bi bi-arrow-counterclockwise" aria-hidden="true" /> Clear &amp; Reset
            </button>
          </div>
        ) : (
          /* Product Grid / List */
          <div
            className={`products-grid${view === 'list' ? ' products-grid--list' : ''}`}
            aria-label="Product results"
          >
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card-wrapper"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        {!loading && filteredProducts.length > 0 && (
          <div className="products-cta-row">
            <a href="#" className="btn-outline">
              View All Resources <i className="bi bi-arrow-right" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
