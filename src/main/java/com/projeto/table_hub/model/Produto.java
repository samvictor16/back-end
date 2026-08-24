package com.projeto.table_hub.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

public class Produto {



    @Entity
    @Table(name = "Produto")
    public class Produto {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(nullable = false, length = 100)
        private String nome;

        private String descricao;

        @Column(nullable = false, precision = 8, scale = 2)
        private BigDecimal preco;

        @Column(name = "foto_url")
        private String fotoUrl;

        @Column(name = "em_estoque")
        private Boolean emEstoque = true;

        // Getters e Setters
        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }

        public String getNome() { return nome; }
        public void setNome(String nome) { this.nome = nome; }

        public String getDescricao() { return descricao; }
        public void setDescricao(String descricao) { this.descricao = descricao; }

        public BigDecimal getPreco() { return preco; }
        public void setPreco(BigDecimal preco) { this.preco = preco; }

        public String getFotoUrl() { return fotoUrl; }
        public void setFotoUrl(String fotoUrl) { this.fotoUrl = fotoUrl; }

        public Boolean getEmEstoque() { return emEstoque; }
        public void setEmEstoque(Boolean emEstoque) { this.emEstoque = emEstoque; }
    }
}
