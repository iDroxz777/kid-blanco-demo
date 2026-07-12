"use client";

import { useMemo, useState } from "react";
import { menuGroups, totalMenuItems } from "../data/catalog";
import { formatPrice } from "../data/menu";

const normalize = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function MenuCatalog() {
  const [active, setActive] = useState(menuGroups[0].id);
  const [search, setSearch] = useState("");

  const visibleGroups = useMemo(() => {
    const term = normalize(search.trim());
    if (term) {
      return menuGroups
        .map((group) => ({
          ...group,
          items: group.items.filter((item) =>
            normalize(`${item.name} ${item.description ?? ""}`).includes(term),
          ),
        }))
        .filter((group) => group.items.length > 0);
    }
    return menuGroups.filter((group) => group.id === active);
  }, [active, search]);

  const resultCount = visibleGroups.reduce((total, group) => total + group.items.length, 0);

  return (
    <div className="catalog-shell">
      <div className="catalog-tools">
        <label className="menu-search">
          <span aria-hidden="true">⌕</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar pizza, ingrediente, lanche..."
            aria-label="Buscar no cardápio"
          />
          {search && <button onClick={() => setSearch("")} aria-label="Limpar busca">×</button>}
        </label>
        <span className="menu-count">{search ? `${resultCount} encontrados` : `${totalMenuItems} itens cadastrados`}</span>
      </div>

      <div className="category-tabs" role="tablist" aria-label="Categorias do cardápio">
        {menuGroups.map((group) => (
          <button
            className={active === group.id && !search ? "active" : ""}
            key={group.id}
            onClick={() => { setSearch(""); setActive(group.id); }}
            role="tab"
            aria-selected={active === group.id && !search}
          >
            <span>{group.icon}</span>{group.label}
          </button>
        ))}
      </div>

      <div className="menu-results" aria-live="polite">
        {visibleGroups.length ? visibleGroups.map((group) => (
          <section className="menu-group" key={group.id}>
            <div className="menu-group-heading">
              <div><span>{group.icon}</span><h3>{group.label}</h3></div>
              {group.note && <p>{group.note}</p>}
            </div>
            <div className="menu-items-grid">
              {group.items.map((item) => {
                const message = encodeURIComponent(`Olá! Vi o cardápio da Kid Blanco e gostaria de pedir ${item.name} (${formatPrice(item.price)}).`);
                return (
                  <article className="menu-item" key={`${group.id}-${item.name}`}>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.description || "Consulte opções e adicionais disponíveis."}</p>
                    </div>
                    <div className="menu-item-action">
                      <strong>{formatPrice(item.price)}</strong>
                      <a href={`https://wa.me/5511994158293?text=${message}`} target="_blank" rel="noreferrer" aria-label={`Pedir ${item.name} pelo WhatsApp`}>Pedir →</a>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )) : (
          <div className="empty-menu"><span>🔎</span><h3>Nenhum item encontrado</h3><p>Tente buscar por outro nome ou ingrediente.</p></div>
        )}
      </div>
    </div>
  );
}
